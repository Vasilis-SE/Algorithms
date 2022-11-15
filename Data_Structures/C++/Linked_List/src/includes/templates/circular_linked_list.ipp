#include <stdbool.h>  
#include <stdlib.h>
#include <iostream>

#include "node.hpp"
#include "circular_linked_list.hpp"

template <typename V> 
CircularLinkedList<V>::CircularLinkedList() {
    this->head = NULL;
}

template <typename V> 
CircularLinkedList<V>::~CircularLinkedList() {}

template <typename V>
bool CircularLinkedList<V>::add(V value) {
    Node<V> *new_node = new Node<V>(value);

    if(this->head == NULL) {
        this->head = new_node;
        new_node->setNext(this->head);
        this->num_nodes++;
        return true;
    }

    Node<V> *current_node = this->head;
    while(current_node->getNext() != this->head) 
        current_node = current_node->getNext();

    current_node->setNext(new_node);
    new_node->setNext(this->head);
    this->num_nodes++;

    return true;
}

template <typename V>
Node<V>* CircularLinkedList<V>::findByIndex(int idx) {
    if(idx > this->getNumberOfNodes() || idx < 0) 
        return NULL;

    idx == 0 ? idx = 1 : idx;
    Node<V> *current_node = this->head;
    for(int i=0; i<idx-1; i++) 
        current_node = current_node->getNext();
 
    return current_node;
}

template <typename V>
bool CircularLinkedList<V>::deleteByIndex(int idx) {
    if(idx > this->getNumberOfNodes() || idx < 0) 
        return NULL;

    idx == 0 ? idx = 1 : idx;
    int prevIdx = idx-1;
    int nextIdx = idx+1;
    if(idx == 1) 
        prevIdx = this->getNumberOfNodes();
    
    Node<V>* previousNode = this->findByIndex(prevIdx);
    Node<V>* currentNode = this->findByIndex(idx);
    Node<V>* nextNode = this->findByIndex(nextIdx);
    previousNode->setNext(nextNode);
    delete currentNode;
    
    return true;
}

template <typename V>
void CircularLinkedList<V>::display() {
    std::cout << "Linked List Content: " << '\n';

    Node<V> *current_node = this->head;
    while(current_node->getNext() != this->head) {
        std::cout << "\t => [" << &(*current_node) << "] " << current_node->getValue() << '\n';
        current_node = current_node->getNext();
    }

    // Display the final node's value
    std::cout << "\t => [" << &(*current_node) << "] " << current_node->getValue() << '\n';
}