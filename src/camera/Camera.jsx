import React, { useRef, useEffect, useState } from "react";

function CameraCapture() {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [image, setImage] = useState(null);

    useEffect(() => {
        async function startCamera() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (error) {
                console.error("Error accessing camera:", error);
            }
        }

        startCamera();

        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                let tracks = videoRef.current.srcObject.getTracks();
                tracks.forEach(track => track.stop());
            }
        };
    }, []);

    const capturePhoto = () => {
        const canvas = canvasRef.current;
        const video = videoRef.current;
        const context = canvas.getContext("2d");

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        const imageData = canvas.toDataURL("image/png");
        setImage(imageData);
    };

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            backgroundColor: "#ccc",
            zIndex:"100",
        }}>
            <video 
                ref={videoRef} 
                autoPlay 
                playsInline 
                style={{ width: "100%", maxWidth: "500px", borderRadius: "10px" }} 
            />
            <button 
                onClick={capturePhoto} 
                style={{
                    marginTop: "10px",
                    padding: "10px 20px",
                    fontSize: "16px",
                    cursor: "pointer",
                    borderRadius: "5px",
                    border: "none",
                    backgroundColor: "#007bff",
                    color: "#fff"
                }}
            >
                Capture Photo
            </button>
            <canvas ref={canvasRef} style={{ display: "none" }} />
            {image && (
                <div style={{
                    marginTop: "20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                    <img 
                        src={image} 
                        alt="Captured" 
                        style={{
                            width: "300px",
                            borderRadius: "10px",
                            border: "2px solid #000"
                        }} 
                    />
                    <button 
                        onClick={() => setImage(null)}
                        style={{
                            marginTop: "10px",
                            padding: "8px 16px",
                            fontSize: "14px",
                            cursor: "pointer",
                            borderRadius: "5px",
                            border: "none",
                            backgroundColor: "#dc3545",
                            color: "#fff"
                        }}
                    >
                        Remove Photo
                    </button>
                </div>
            )}
        </div>
    );
}

export default CameraCapture;
