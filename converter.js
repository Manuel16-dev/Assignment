/**
 * Temperature Conversion Utility
 * 
 * Provides functions to convert temperatures between:
 * Celsius (°C), Fahrenheit (°F), and Kelvin (K).
 * 
 * Example Usage:
 *   console.log(celsiusToFahrenheit(0));  // "0°C = 32°F"
 *   console.log(fahrenheitToCelsius(32)); // "32°F = 0°C"
 *   console.log(kelvinToCelsius(273.15)); // "273.15K = 0°C"
 */

// Celsius Conversions
function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function celsiusToKelvin(celsius) {
  return celsius + 273.15;
}

// Fahrenheit Conversions
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function fahrenheitToKelvin(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9 + 273.15;
}

// Kelvin Conversions
function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

function kelvinToFahrenheit(kelvin) {
  return (kelvin - 273.15) * 9 / 5 + 32;
}

// Example Usage
console.log(`${25}°C = ${celsiusToFahrenheit(25)}°F`);
console.log(`${32}°F = ${fahrenheitToKelvin(32)}K`);
console.log(`${273.15}K = ${kelvinToCelsius(273.15)}°C`);
