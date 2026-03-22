package main

import (
	"encoding/json"
	"net/http"
	"time"
)

type GreetingResponse struct {
	Message   string `json:"message"`
	Timestamp string `json:"timestamp"`
}

func greetingHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(GreetingResponse{
		Message:   "Hello from agent-kanban!",
		Timestamp: time.Now().UTC().Format(time.RFC3339),
	})
}

func main() {
	http.HandleFunc("/api/greeting", greetingHandler)
	http.ListenAndServe(":8080", nil)
}
