package com.datingapp.controller;

import com.datingapp.dto.ChatRequest;
import com.datingapp.dto.ChatResponse;
import com.datingapp.model.ChatLog;
import com.datingapp.service.ChatService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/chat")
public class ChatController {

    private final ChatService chatService;

    public ChatController(ChatService chatService) {
        this.chatService = chatService;
    }

    private String getCurrentUserId() {
        return SecurityContextHolder.getContext().getAuthentication().getName();
    }

    @PostMapping("/send")
    public ResponseEntity<?> sendMessage(@RequestBody ChatRequest request) {
        try {
            String senderId = getCurrentUserId();
            ChatResponse response = chatService.sendMessage(senderId, request);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/history/{proxyUserId}")
    public ResponseEntity<?> getHistory(@PathVariable String proxyUserId) {
        try {
            String senderId = getCurrentUserId();
            ChatLog history = chatService.getHistory(senderId, proxyUserId);
            return ResponseEntity.ok(history != null ? history : new ChatLog());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
