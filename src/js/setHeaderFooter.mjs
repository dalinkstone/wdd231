import { parkInfoTemplate } from "./templates.mjs";

function getMailingAddress(addresses) {
	const mailing = addresses.find((address) => address.type === "Mailing");
	return mailing;
}

function getVoicePhone(numbers) {
	const voice = numbers.find((number) => number.type === "Voice");
	return voice.phoneNumber;
}

function footerTemplate(info) {
	const mailing = getMailingAddress(info.addresses);
	const voice = getVoicePhone(info.contacts.phoneNumbers);

	return `<section class="contact">
  <h3>Contact Info</h3>
  <h4>Mailing Address:</h4>
  <div><p>${mailing.line1}<p>
  <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p></div>
  <h4>Phone:</h4>
  <p>${voice}</p>
</section>`;
}

function setFooter(data) {
	const footerEl = document.querySelector("#park-footer");
	footerEl.innerHTML = footerTemplate(data);
}

function setHeaderInfo(data) {

	const disclaimer = document.querySelector(".disclaimer > a");
	disclaimer.href = data.url;
	disclaimer.innerHTML = data.fullName;

	document.querySelector("head > title").textContent = data.fullName;
	document.querySelector(".hero-banner > img").src = data.images[0].url;
	document.querySelector(".hero-banner__content").innerHTML =
		parkInfoTemplate(data);
}

export function setHeaderFooter(data) {
	setHeaderInfo(data);
	setFooter(data);
}
