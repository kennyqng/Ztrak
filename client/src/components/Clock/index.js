import React from "react";
import "./style.css";

function Clock() {
    var canvas = document.getElementById("canvas");
          var ctx = canvas.getContext("2d");
          var radius = canvas.height / 2;
          ctx.translate(radius, radius);
          radius = radius * 0.9;
          drawClock();
    
          function drawClock() {
            ctx.arc(0, 0, radius, 0, 2 * Math.PI);
            ctx.fill();
          }
          function drawClock() {
            drawFace(ctx, radius);
          }
    
          function drawFace(ctx, radius) {
            ctx.beginPath();
            ctx.strokeStyle = "white";
            ctx.arc(0, 0, radius, 0, 2 * Math.PI);
            ctx.lineWidth = radius * 0.05;
            ctx.stroke();
          }
          function drawClock() {
            drawFace(ctx, radius);
            drawNumbers(ctx, radius);
          }
    
          function drawNumbers(ctx, radius) {
            var ang;
            var num;
            ctx.font = radius * 0.15 + "px arial";
            ctx.textBaseline = "middle";
            ctx.textAlign = "center";
            for (num = 1; num < 13; num++) {
              ang = (num * Math.PI) / 6;
              ctx.rotate(ang);
              ctx.translate(0, -radius * 0.85);
              ctx.rotate(-ang);
              ctx.fillText(num.toString(), 0, 0);
              ctx.rotate(ang);
              ctx.translate(0, radius * 0.85);
              ctx.rotate(-ang);
            }
          }
          function drawClock() {
            console.log(canvas.width,canvas.height)
            ctx.clearRect(-200, -200, canvas.width, canvas.height);
            drawFace(ctx, radius);
            drawTime(ctx, radius);
          }
    
          function drawTime(ctx, radius) {
            var now = new Date();
            var hour = now.getHours();
            var minute = now.getMinutes();
            var second = now.getSeconds();
            //hour
            hour = hour % 12;
            hour =
              (hour * Math.PI) / 6 +
              (minute * Math.PI) / (6 * 60) +
              (second * Math.PI) / (360 * 60);
            drawHand(ctx, hour, radius * 0.5, radius * 0.05);
            //minute
            minute = (minute * Math.PI) / 30 + (second * Math.PI) / (30 * 60);
            drawHand(ctx, minute, radius * 0.8, radius * 0.05);
            // second
            second = (second * Math.PI) / 30;
            drawHand(ctx, second, radius * 0.9, radius * 0.02);
          }
    
          function drawHand(ctx, pos, length, width) {
            
            ctx.beginPath();
            ctx.strokeStyle = "white";
            ctx.lineWidth = width;
            ctx.lineCap = "round";
            ctx.moveTo(0, 0);
            ctx.rotate(pos);
            ctx.lineTo(0, -length);
            ctx.stroke();
            ctx.rotate(-pos);
          }
          setInterval(drawClock, 1000);
  return (
    <div className="clock">
      <canvas id="canvas" width="400" height="400"></canvas>
    </div>
  );
}

export default Clock;
