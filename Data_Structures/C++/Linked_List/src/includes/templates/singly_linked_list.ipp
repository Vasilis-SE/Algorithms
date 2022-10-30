#include <stdbool.h>  
#include <stdlib.h>
#include <iostream>

#include "node.hpp"
#include "singly_linked_list.hpp"

template <typename V> 
SinglyLinkedList<V>::SinglyLinkedList() {
    this->head = NULL;
}

template <typename V> 
SinglyLinkedList<V>::~SinglyLinkedList() {}

template <typename V>
bool SinglyLinkedList<V>::add(V value) {
    Node<V> *new_node = new Node<V>(value);

    if(this->head == NULL) {
        this->head = new_node;
        return true;
    }

    Node<V> *current_node = this->head;
    while(current_node->getNext() != NULL) 
        current_node = current_node->getNext();

    current_node->setNext(new_node);
    return true;
}

template <typename V>
Node<V>* SinglyLinkedList<V>::findByIndex(int idx) {
    if(idx == 0) idx = 1;
    Node<V> *current_node = this->head;
    for(int i=0; i<idx-1; i++) 
        current_node = current_node->getNext();
    return current_node;
}

template <typename V>
void SinglyLinkedList<V>::display() {
    std::cout << "Linked List Content: " << '\n';

    Node<V> *current_node = this->head;
    while(current_node != NULL) {
        std::cout << "\t => [" << &(*current_node) << "] " << current_node->getValue() << '\n';
        current_node = current_node->getNext();
    }
}