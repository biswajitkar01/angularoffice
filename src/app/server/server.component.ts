import { Component } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styles: [
    `
      .online {
        color: white;
      }
    `
  ]
})
export class ServerComponent {
  serverStatus: string = "Processing";
  serverName = "";
  serverButton = false;
  serverCreated = false;
  serverss = [];

  constructor() {
    setTimeout(() => {
      this.serverButton = true;
    }, 2000);
    // setTimeout(() => {
    //   this.serverStatus = "No server Added!!";
    // }, 2000);

    this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
    // if (this.serverName === "") {
    //   this.serverButton = false;
  }

  onAddServer() {
    this.serverCreated = true;
    this.serverss.push(this.serverName);
    //this.serverStatus = "server added-->" + this.serverName;
    // this.serverName = "";
    // this.serverName = this.serverName;
  }
  // onEnterServer() {
  //   return (this.serverButton = true);
  //   // this.serverName = event.value;
  // }

  getColor() {
    return this.serverStatus === "online" ? "green" : "red";
  }
}
