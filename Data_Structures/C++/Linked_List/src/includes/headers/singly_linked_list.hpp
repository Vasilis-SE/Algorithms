#ifndef SINGLY_LINKED_LIST
#define SINGLY_LINKED_LIST

#include "node.hpp"
#include "linked_list.hpp"

template <typename V>
class SinglyLinkedList : public LinkedList<V>
{
private:
    int num_nodes;
    Node<V> *head;

public:
    SinglyLinkedList();
    ~SinglyLinkedList();

    void display();
    Node<V>* findByIndex(int idx);
    bool add(V value);
};

#include "singly_linked_list.ipp"

#endif