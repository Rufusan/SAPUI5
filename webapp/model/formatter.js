sap.ui.define([
	], function () {
		"use strict";

		return {
			/**
			 * Rounds the currency value to 2 digits
			 *
			 * @public
			 * @param {string} sValue value to be formatted
			 * @returns {string} formatted currency value with 2 digits
			 */
			currencyValue : function (sValue) {
				if (!sValue) {
					return "";
				}

				return parseFloat(sValue).toFixed(2);
			},
			/**
			 * Formats an address to a static google maps image
			 * @public
			 * @param {string} sStreet the street
			 * @param {string} sZIP the postal code
			 * @param {string} sCity the city
			 * @param {string} sCountry the country
			 * @returns {string} sValue a google maps URL that can be bound to an image
			 */
			formatMapUrl: function(sStreet, sZIP, sCity, sCountry) {
				return "https://maps.googleapis.com/maps/api/staticmap?center="
					+ jQuery.sap.encodeURL(sStreet + ",+" + sZIP +  "+" + sCity + ",+" + sCountry + 
					"&zoom=13&scale=1&size=600x300&maptype=roadmap&key=AIzaSyAdOcrIF7I6YqpXrYW-2QUEABpqmYcGNxg&format=png&visual_refresh=true");
			}
		};

	}
);