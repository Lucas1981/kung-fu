export default class Node {

  public next: Node;

  constructor(
    public element
  ) {
    this.next = null;
  }
}
