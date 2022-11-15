#ifndef LINKED_LIST
#define LINKED_LIST

/**
 * Abstract class LinkedList that specifies the necessary methods / properties that the
 * singly linked list, circular linked list and doubly linked list must inherite and implement.
*/
template <typename V>
class LinkedList
{
protected:
    int num_nodes;
    Node<V> *head;

    void setNumberOfNodes(int i);

public:
    virtual ~LinkedList(){};

    virtual bool add(V value) = 0;
    virtual Node<V>* findByIndex(int idx) = 0;
    virtual bool deleteByIndex(int idx) = 0;
    virtual void display() = 0;

    int getNumberOfNodes();
};

#include "linked_list.ipp"

#endif