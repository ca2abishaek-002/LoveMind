package com.datingapp.service;

import com.datingapp.dto.ChatRequest;
import com.datingapp.dto.ChatResponse;
import com.datingapp.model.ChatLog;
import com.datingapp.model.ChatMessage;
import com.datingapp.model.User;
import com.datingapp.repository.ChatLogRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Optional;

@Service
public class ChatService {

    private final ChatLogRepository chatLogRepository;
    private final AIProxyService aiProxyService;
    private final UserService userService;

    public ChatService(ChatLogRepository chatLogRepository, AIProxyService aiProxyService, UserService userService) {
        this.chatLogRepository = chatLogRepository;
        this.aiProxyService = aiProxyService;
        this.userService = userService;
    }

    public ChatResponse sendMessage(String senderId, ChatRequest request) {
        String proxyUserId = request.getProxyUserId();
        Optional<ChatLog> logOpt = chatLogRepository.findBySenderIdAndProxyUserId(senderId, proxyUserId);
        
        ChatLog chatLog;
        if (logOpt.isPresent()) {
            chatLog = logOpt.get();
        } else {
            chatLog = new ChatLog();
            chatLog.setSenderId(senderId);
            chatLog.setProxyUserId(proxyUserId);
            chatLog.setMessages(new ArrayList<>());
            chatLog.setCreatedAt(LocalDateTime.now());
        }

        // Add user message
        chatLog.getMessages().add(new ChatMessage("user", request.getMessage(), LocalDateTime.now()));
        
        // Get AI response
        String aiReply = aiProxyService.getAIResponse(proxyUserId, request.getMessage());
        LocalDateTime replyTime = LocalDateTime.now();
        chatLog.getMessages().add(new ChatMessage("assistant", aiReply, replyTime));
        
        chatLog.setUpdatedAt(LocalDateTime.now());
        chatLogRepository.save(chatLog);

        User proxyUser = userService.getUserById(proxyUserId);
        return new ChatResponse(aiReply, proxyUser.getDisplayName(), replyTime);
    }

    public ChatLog getHistory(String senderId, String proxyUserId) {
        return chatLogRepository.findBySenderIdAndProxyUserId(senderId, proxyUserId)
                .orElse(null);
    }
}
