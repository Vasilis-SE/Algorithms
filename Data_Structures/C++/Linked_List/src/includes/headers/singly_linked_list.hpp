#ifndef SINGLY_LINKED_LIST
#define SINGLY_LINKED_LIST

#include "node.hpp"
#include "linked_list.hpp"

template <typename V>
class SinglyLinkedList : public LinkedList<V>
{
private:
    Node<V> *head;

public:
    SinglyLinkedList();
    ~SinglyLinkedList();

    void display();
    bool add(V value);
};

#include "singly_linked_list.ipp"

#endif