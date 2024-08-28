import React from 'react';
import {
    Button,
    Label,
    ListBox,
    ListBoxItem,
    Popover,
    Select,
    SelectValue
} from 'react-aria-components';

import { createSnippet } from 'svelte-react-snippet';

function SelectForm<T extends string[]>({
  options,
  onSelectionChange
}: {
  options: T,
  onSelectionChange?: (value: T[number]) => void
}) {
  return (
    <Select onSelectionChange={onSelectionChange}>
      <Label>Favorite Animal</Label>
      <Button>
        <SelectValue />
        <span aria-hidden="true">▼</span>
      </Button>
      <Popover>
        <ListBox>
          {(options || []).map((option) => (
            <ListBoxItem key={option} id={option}>
              {option}
            </ListBoxItem>
          ))}
        </ListBox>
      </Popover>
    </Select>
  );
}

export const selectSnippet = createSnippet<[{
  options: string[],
  onSelectionChange?: (value: string) => void
}]>((args) => (
  <SelectForm options={args().options} onSelectionChange={args().onSelectionChange} />
));
