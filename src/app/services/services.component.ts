import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  card_list:any =[
    {
     img:"assets/icons/Layer 3.png",
     title:"smart contracts development"
    },
    {
      img:'assets/icons/Layer 4.png',
      title:"Exchanges"
    },
    {
     img:"assets/icons/Layer 5.png",
     title:"blockchain devlopments"
    },
    {
      img:"assets/icons/Network-512.png",
      title:"Hyperledger"
    },
    {
      img:"assets/icons/if_Dzone_669685.png",
      title:"Private blockchain devlopme"
    },
    {
      img:"assets/icons/Layer 6.png",
      title:"wallet"
    }
  ]
  constructor() { }
  
  ngOnInit(): void {
    
    
  }

}
