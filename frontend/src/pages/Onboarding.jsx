import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';
import { useAuth } from '../context/AuthContext';

const QUESTIONS = [
  "Your Uber driver takes a completely wrong turn. What do you do?",
  "You're at a party where you don't know anyone. How do you handle it?",
  "Your friend cancels plans at the last minute for the third time. How do you respond?",
  "You find a wallet with $500 cash on the street. What's your move?",
  "You're assigned a group project and one member isn't contributing. What do you do?"
];

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState(Array(QUESTIONS.length).fill(''));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  const navigate = useNavigate();
  const { user, updateProfile } = useAuth();

  const handleNext = () => {
    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(curr => curr + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(curr => curr - 1);
    }
  };

  const handleChange = (e) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = e.target.value;
    setAnswers(newAnswers);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError('');

    const formattedAnswers = answers.map((ans, idx) => ({
      question: QUESTIONS[idx],
      answer: ans
    }));

    try {
      await api.post('/questionnaire/submit', { answers: formattedAnswers });
      
      // Update local user state if needed
      if (user) {
        updateProfile({ ...user, onboardingComplete: true });
      }
      
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to submit questionnaire');
      setIsSubmitting(false);
    }
  };

  const progress = ((currentStep + 1) / QUESTIONS.length) * 100;

  return (
    <div className="page onboarding-page">
      <div className="onboarding-container">
        <div className="text-center" style={{ marginBottom: '40px' }}>
          <h1 className="gradient-text">Let's Build Your Proxy</h1>
          <p className="text-muted" style={{ marginTop: '16px' }}>
            Answer these questions honestly to train your AI proxy.
          </p>
        </div>

        <div className="progress-container">
          <div className="progress-header">
            <span>Question {currentStep + 1}</span>
            <span>{QUESTIONS.length} Questions</span>
          </div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        {error && <div className="alert-error">{error}</div>}

        <div className="glass-card question-card" key={currentStep}>
          <h3 className="question-text">{QUESTIONS[currentStep]}</h3>
          
          <textarea
            className="question-textarea"
            placeholder="Type your answer here... Be as detailed as you like!"
            value={answers[currentStep]}
            onChange={handleChange}
          ></textarea>

          <div className="onboarding-actions">
            <button 
              className="btn btn-secondary" 
              onClick={handleBack}
              disabled={currentStep === 0 || isSubmitting}
            >
              Back
            </button>
            
            {currentStep < QUESTIONS.length - 1 ? (
              <button 
                className="btn btn-primary" 
                onClick={handleNext}
                disabled={!answers[currentStep].trim()}
              >
                Next
              </button>
            ) : (
              <button 
                className="btn btn-accent" 
                onClick={handleSubmit}
                disabled={!answers[currentStep].trim() || isSubmitting}
              >
                {isSubmitting ? 'Creating Proxy...' : 'Submit & Finish'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
