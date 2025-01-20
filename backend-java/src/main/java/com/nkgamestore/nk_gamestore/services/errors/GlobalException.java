package com.nkgamestore.nk_gamestore.services.errors;

import com.nkgamestore.nk_gamestore.entities.RestResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalException {

public ResponseEntity<RestResponse<Object>> handleIdException(){
    RestResponse<Object> res = new RestResponse<>();
    res.setStatusCode(HttpStatus.BAD_REQUEST.value());
    res.setMessage("Invalid Id");

    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(res);
}
}
