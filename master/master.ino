#include <ESP8266WiFi.h>
#include <ESP8266mDNS.h>
#include <ArduinoOTA.h>
#include <ESP8266WebServer.h>

#include <Wire.h>
#include <LiquidCrystal_I2C.h>


#ifndef STASSID
#define STASSID "your-ssid"
#define STAPSK "your-password"
#endif

const char* ssid = STASSID;
const char* password = STAPSK;

ESP8266WebServer server(80);
LiquidCrystal_I2C lcd(0x27, 20, 4);


const char* www_username = "admin";
const char* www_password = "esp8266";

void setup() {
  Serial.begin(9600);
  WiFi.mode(WIFI_AP);
  ArduinoOTA.begin();


  lcd.init();
  lcd.backlight();
  lcd.setCursor(0, 0);
  lcd.print("BOXYBOX");
  lcd.setCursor(0, 1);
    lcd.print("Closed");

  server.on("/", []() {
    if (!server.authenticate(www_username, www_password)) {
      return server.requestAuthentication();
    }
    lcd.setCursor(0, 1);
    lcd.print("Opened");
    server.send(200, "text/plain", "Login OK");
  });

  server.on("/logout",[]() { 
    lcd.setCursor(0, 1);
    lcd.print("Closed");
    server.send(401, "text/html", "logged out!"); 
    });


  server.begin();

  Serial.print("Open http://");
  Serial.print(WiFi.localIP());
  Serial.println("/ in your browser to see it working");
}

void loop() {
  ArduinoOTA.handle();
  server.handleClient();
}
