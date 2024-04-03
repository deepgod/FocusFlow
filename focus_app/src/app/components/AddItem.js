import React from "react";
import styles from "./AddItem.module.css";

var container = document.createElement("div");

// Title component
var titleDiv = document.createElement("div");
var titleLabel = document.createElement("label");
titleLabel.innerHTML = "Title:";
var titleTextbox = document.createElement("input");
titleTextbox.setAttribute("type", "text");
titleTextbox.setAttribute("id", "titleTextbox");
titleDiv.appendChild(titleLabel);
titleDiv.appendChild(titleTextbox);
container.appendChild(titleDiv);

// URL component
var urlDiv = document.createElement("div");
var urlLabel = document.createElement("label");
urlLabel.innerHTML = "URL:";
var urlTextbox = document.createElement("input");
urlTextbox.setAttribute("type", "text");
urlTextbox.setAttribute("id", "urlTextbox");
urlDiv.appendChild(urlLabel);
urlDiv.appendChild(urlTextbox);
container.appendChild(urlDiv);

// Content component
var contentDiv = document.createElement("div");
var contentLabel = document.createElement("label");
contentLabel.innerHTML = "Content:";
var contentTextarea = document.createElement("textarea");
contentTextarea.setAttribute("rows", "4");
contentTextarea.setAttribute("cols", "50");
contentTextarea.setAttribute("id", "contentTextarea");
contentDiv.appendChild(contentLabel);
contentDiv.appendChild(contentTextarea);
container.appendChild(contentDiv);

// Append the container to the document body
document.body.appendChild(container);