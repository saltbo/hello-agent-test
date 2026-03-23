package main

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestGreetingHandler(t *testing.T) {
	req := httptest.NewRequest(http.MethodGet, "/api/greeting", nil)
	rec := httptest.NewRecorder()

	greetingHandler(rec, req)

	if rec.Code != http.StatusOK {
		t.Fatalf("expected status 200, got %d", rec.Code)
	}

	var resp GreetingResponse
	if err := json.NewDecoder(rec.Body).Decode(&resp); err != nil {
		t.Fatalf("failed to decode response: %v", err)
	}

	if resp.Message != "Hello from agent-kanban!" {
		t.Errorf("unexpected message: %s", resp.Message)
	}

	if resp.Timestamp == "" {
		t.Error("timestamp should not be empty")
	}
}
