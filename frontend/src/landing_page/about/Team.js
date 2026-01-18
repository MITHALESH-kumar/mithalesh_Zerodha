
import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/mithaleshkumar.jpg"
            style={{ borderRadius: "90%", width: "50%" }}
          />
          <h4 className="mt-5">Mithalesh kumar</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            I am a passionate engineering student with a strong interest in web development and startup-driven products. This project is a self-built Zerodha-inspired platform created to learn how real-world financial applications are designed and structured.
          </p>
          <p>
            He is a student developer focused on learning real-world web development by building practical, startup-inspired projects.
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Linkedin.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;