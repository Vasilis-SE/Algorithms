#include <stdlib.h>

template <typename T>
Node<T>::Node() {
    this->value = NULL;
    this->next = NULL;
}

template <typename T>
Node<T>::Node(T value) {
    this->value = value;
    this->next = NULL;
}

template <typename T>
Node<T>::~Node() {
    this->value = 0;
    this->next = NULL;
}

template <typename T>
T Node<T>::getValue() {
    return this->value;
}

template <typename T>
Node<T> Node<T>::getNext() {
    return this->next;
}

template <typename T>
void Node<T>::setValue(T v) {
    this->value = v;
}

template <typename T>
void Node<T>::setNext(Node n) {
    this->next = n;
}