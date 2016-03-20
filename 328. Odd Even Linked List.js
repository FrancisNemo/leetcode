//328. Odd Even Linked List
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if(head === null || head.next === null || head.next.next === null){
    	return head;
    }
    var odd = head, even = head.next, evenHead = head.next;
    while(even !== null && even.next !== null){
	    odd.next = even.next;
	    even.next = even.next.next;
	    odd.next.next = evenHead;
	    odd = odd.next;
	    even = even.next;
    }
    return head;
};