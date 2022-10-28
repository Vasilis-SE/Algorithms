#ifndef LINKED_LIST
#define LINKED_LIST

/**
 * Abstract class LinkedList that specifies the necessary methods / properties that the
 * singly linked list, circular linked list and doubly linked list must inherite and implement.
*/
template <typename V>
class LinkedList
{
private:
    Node<V> *head;

public:
    virtual ~LinkedList(){};

    virtual void display() = 0;
    virtual bool add(V value) = 0;
};

#endif