export default class MessageModel {
  sentAt: Number;
  sentBy: String;
  messageText: String;
  constructor(sentAt: Number, sentBy: String, messageText: String) {
    this.sentAt = sentAt;
    this.sentBy = sentBy;
    this.messageText = messageText;
  }
}
