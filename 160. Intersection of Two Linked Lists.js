/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    var alen = getLength(headA);
    var blen = getLength(headB);
    if(alen === 0 || blen === 0){
        return null;
    }
    if(alen === 1 && blen === 1){
        if(headA===headB){
            return headA;
        }else{
            return null;
        }
    }
    var len = alen - blen;
    if(len > 0){
         while(len-- > 0){
             headA = headA.next;
         }
         while(blen-- > 0){
             if( headA === headB ){
                return headA;
             }else{
                headA = headA.next;
                headB = headB.next;
             }
         }
         return headA;
    }else{
         while(len++ < 0){
             headB = headB.next;
         }
         while(alen-- > 0){
             if( headA === headB ){
                return headA;
             }else{
                headA = headA.next;
                headB = headB.next;
             }
         }
         return headA;
    }
    
};

function getLength(node){
    var length = 1;
    if(node === null){
        return 0;
    }
    while(node.next !== null){
        length++;
        node = node.next;
    }
    return length;
}