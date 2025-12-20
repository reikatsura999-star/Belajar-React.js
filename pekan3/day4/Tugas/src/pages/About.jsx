import React from "react";

function About(){
    const styleImg ={
     height : "200px",
     weight : "200px",
     borderRadius : "4px"
    }
    return(
        <div>
            <h1>This is about me</h1>

            <p>my name is yanto,you can call me yanto<br></br> iam student in universitas brawijaya major in informatics</p>

            <img style={styleImg} src="https://img.freepik.com/foto-premium/mahasiswa-asia-muda-membawa-buku-dan-ransel-dengan-gembira-merayakan-kesuksesan-dengan-mengangkat-tangan-terisolasi-di-atas-latar-belakang-biru_861453-75.jpg?semt=ais_hybrid&w=740&q=80"/>
        </div>
    )
}
export default About;