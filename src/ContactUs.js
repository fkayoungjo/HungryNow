import React from 'react';
import { Button, Form, FormGroup, Label, Input, Card } from 'reactstrap';




export const ContactUs = (props) => {

  return (
    <div className="profile">
        <h3>Contact Us</h3>
        <p>Do you have any questions? Please do not hesitate to contact us directly. Our team will get back to you within a matter of hours to help you.</p>
        <Card body outline color="secondary" className="contactCard">
        <form action="mailto:jordan.simon55@gmail.com.com" method="post" enctype="text/plain">
        <FormGroup>
          <Label for="contact name" hidden>Contact Name</Label>
          <Input type="contact name" name="contact name" id="contact name" placeholder="Name" />
        </FormGroup>
        <FormGroup>
          <Label for="contact email" hidden>Contact Email</Label>
          <Input type="contact email" name="contact email" id="contact email" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Label for="subject" hidden>Subject</Label>
          <Input type="subject" name="subject" id="subject" placeholder="Subject" />
        </FormGroup>
        <FormGroup>
          <Label for="message" hidden>Message</Label>
          <Input type="message" name="message" id="message" placeholder="Message" />
        </FormGroup>
        <Button>Submit</Button>
        </form>
        </Card>
    </div>

  );
}



export default ContactUs;
