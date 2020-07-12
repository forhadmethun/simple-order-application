package com.forhadhossain.dispatch.controller;
import com.forhadhossain.dispatch.io.ErrorResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.PersistenceException;
import javax.security.auth.message.AuthException;

@RestController
@ControllerAdvice
public class ExceptionController {
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> inValidException(Exception e) {
        return new ResponseEntity(new ErrorResponse(e.getMessage()), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(PersistenceException.class)
    public ResponseEntity<ErrorResponse> persistenceException(Exception e) {
        return new ResponseEntity(new ErrorResponse(e.getMessage()), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(AuthException.class)
    public ResponseEntity<ErrorResponse> authException(Exception e) {
        return new ResponseEntity(new ErrorResponse(e.getMessage()), HttpStatus.UNAUTHORIZED);
    }
}
