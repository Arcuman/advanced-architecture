docker-compose up -d

// ------------------------------------------
// 🌍🌍🌍 CURL Commands for Testing 
// ------------------------------------------

curl -X POST http://localhost:3000/alarms -H "Content-Type: application/json" -d '{"name": "Test Alarm", "severity": "high"}'

curl http://localhost:3000/alarms