import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Messages } from '../messages';
import { MessagesService } from '../service/messages.service';

@Component({
  selector: 'app-doctor-message',
  templateUrl: './doctor-message.component.html',
  styleUrls: ['./doctor-message.component.css']
})
export class DoctorMessageComponent implements OnInit {

  constructor(private route:ActivatedRoute,private messageService:MessagesService) { }
  doc_id:string="";
  spec_id : string="";
  messages:Messages[] = [];
  messageToBeSent : Messages = new Messages();

  ngOnInit(): void {
    this.doc_id = this.route.snapshot.params['did']
    this.spec_id = localStorage.getItem('specialistId')||"";

    console.log("doctor id is",this.doc_id);
    console.log("spec id is",this.spec_id);
    this.messageService.getMessages(this.doc_id,this.spec_id!).subscribe(
      (data:any) => {
        this.messages = data;
        console.log("Messages obtaiend are hey",this.messages);
        window.scrollTo(0, document.body.scrollHeight);
        // ('.chat-history')[0].scrollTop = ('.chat-history')[0].scrollHeight
      },
      (error:any) => {console.log('Error fetching questions!',error)}
    )

  }


  public onSendMessage(messageToBeSent:Messages)
  {
    console.log("messageToBeSent is " , messageToBeSent);
    messageToBeSent.postedBy = true;  
    this.messageService.sendMessage(messageToBeSent,this.spec_id,this.doc_id).subscribe(
      (data:any) => {
        console.log("Message successfully stored!",data);
        messageToBeSent.message = null!;
        // window.scrollTo(0, document.body.scrollHeight);

        this.ngOnInit();
      },
      (error:any) => {console.log('Could not store message!',error)}
    )
  }

  
  loadNewMessages()
  {

    this.ngOnInit();
  }

}
