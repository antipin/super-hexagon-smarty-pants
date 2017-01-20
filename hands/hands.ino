const int relayPin1 = 8;
const int relayPin2 = 9;
const int timeout = 150;

String symbol = "";   // for incoming serial data

void setup() {

  Serial.begin(9600);
  // put your setup code here, to run once:
  pinMode(relayPin1, OUTPUT);
  pinMode(relayPin2, OUTPUT);
}

void loop() {

  if (Serial.available() > 0) {
    
    String keyName = Serial.readStringUntil('\n');

    if (keyName.equals("left")) {
      
      digitalWrite(relayPin1, HIGH);
      digitalWrite(relayPin2, LOW);
      delay(timeout);
      digitalWrite(relayPin1, LOW);
        
    } else if (keyName.equals("right")) {
      
      digitalWrite(relayPin1, LOW);
      digitalWrite(relayPin2, HIGH);
      delay(timeout);
      digitalWrite(relayPin2, LOW);
      
    }
    
  }

}

