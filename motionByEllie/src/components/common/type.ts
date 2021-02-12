export interface Draggable {
  onDragStart(event: DragEvent): void;
  //드래그 시작시 반응하는 함수
  onDragEnd(event: DragEvent): void;
  //드래그 끝날때 반응하는 함수
}

export interface Hoverable {
  onDragEnter(event: DragEvent): void;
  onDragLeave(event: DragEvent): void;
}

export interface Droppable {
  onDragOver(event: DragEvent): void;
  onDrop(event: DragEvent): void;
}
