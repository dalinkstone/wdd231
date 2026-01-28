import "../css/style.css";
import "../css/conditions.css";

import { getParkData, getParkAlerts, getVisitorCenterData } from "./parkService.mjs";
import { alertTemplate, visitorTemplate, activityTemplate } from "./templates.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";

function setAlerts(alerts) {
	const alertEl = document.querySelector(".alerts > ul");
	alertEl.innerHTML = "";
	const html = alerts.map(alertTemplate);
	alertEl.insertAdjacentHTML("beforeend", html.join(""));
}

function setVisitorCenters(centers) {
	const visitorEl = document.querySelector(".visitor ul");
	const html = centers.map(visitorTemplate);
	visitorEl.insertAdjacentHTML("beforeend", html.join(""));
}

function setActivities(activities) {
	const activityEl = document.querySelector(".activities ul");
	const html = activityTemplate(activities);
	activityEl.insertAdjacentHTML("beforeend", html);
}

async function init() {
	const parkData = await getParkData();
	const alerts = await getParkAlerts(parkData.parkCode);
	const centers = await getVisitorCenterData(parkData.parkCode);

	setHeaderFooter(parkData);
	setAlerts(alerts);
	setVisitorCenters(centers);
	setActivities(parkData.activities);
}

init();

