#ifndef LINKED_LIST_NODE
#define LINKED_LIST_NODE

template <typename T>
class Node
{
    private:
        T value;
        Node<T> *next;
        
    public:
        Node();
        Node(T value);
        ~Node();

        T getValue();
        Node getNext();

        void setValue(T v);
        void setNext(Node n);
};

#include "node.ipp"

#endif