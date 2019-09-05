import { Component } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html"
})
export class ServerComponent {
  serverStatus: string = "Processing";
  serverName = "";
  serverButton = false;

  constructor() {
    setTimeout(() => {
      this.serverButton = true;
    }, 2000);
    setTimeout(() => {
      this.serverStatus = "No server Added!!";
    }, 2000);
    // if (this.serverName === "") {
    //   this.serverButton = false;
  }

  onAddServer() {
    this.serverStatus = "server added-->" + this.serverName;
    this.serverName = "";
    // this.serverName = this.serverName;
  }
  // onEnterServer() {
  //   return (this.serverButton = true);
  //   // this.serverName = event.value;
  // }
}
