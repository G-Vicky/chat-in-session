export default class MessageModel {
  sentAt: Number;
  sentBy: String;
  messageText: String;
  likeCount: Number;
  constructor(sentAt: Number, sentBy: String, messageText: String) {
    this.sentAt = sentAt;
    this.sentBy = sentBy;
    this.messageText = messageText;
    this.likeCount = 0;
  }
}
