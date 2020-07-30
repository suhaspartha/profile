package com.mailer.portfolio.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mailer.portfolio.dto.RequestDto;

@CrossOrigin(origins = { "*" }, maxAge = 4800, allowCredentials = "false")
@RestController
@RequestMapping("/")
public class EmailController {

	@Autowired
	private JavaMailSender javaMailSender;

	@PostMapping("/sendmail")
	public ResponseEntity<String> sendMail(@RequestBody RequestDto request) {
		try {
			SimpleMailMessage msg = new SimpleMailMessage();

			StringBuilder mailBody = new StringBuilder();
			mailBody.append("Hi Suhas,").append("\n").append("This is ").append(request.getName()).append("\n")
					.append(request.getMessage()).append("\n").append("Requestor email is ").append(request.getEmail());
			msg.setFrom("myfbjobs@aol.com");
			msg.setTo("geekystark@gmail.com");
			msg.setSubject("Hi Suhas this is " + request.getName() + ". Can we talk?");
			msg.setText(mailBody.toString());
			javaMailSender.send(msg);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<String>("failed", HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<String>("success", HttpStatus.OK);
	}
}
