package com.datingapp.dto;

public class ChatRequest {
    private String proxyUserId;
    private String message;

    public ChatRequest() {}

    public String getProxyUserId() { return proxyUserId; }
    public void setProxyUserId(String proxyUserId) { this.proxyUserId = proxyUserId; }

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
}
