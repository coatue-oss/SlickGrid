import { Group } from '../core'
import { Item } from '../dataview'
import { Editor } from './'

const LEFT = 37
const RIGHT = 39

export class TextEditor extends Editor {
  private $input: JQuery
  private defaultValue: string | null

  init() {
    this.$input = $('<input type="text" class="editor-text" />')
      .appendTo(this.args.container)
      .bind('keydown.nav', function (e) {
        if (e.keyCode === LEFT || e.keyCode === RIGHT) {
          e.stopImmediatePropagation()
        }
      })
      .focus()
      .select()
  }

  destroy() {
    this.$input.remove()
  }

  focus() {
    this.$input.focus()
  }

  getValue() {
    return this.$input.val()
  }

  setValue(val: string) {
    this.$input.val(val)
  }

  loadValue(item: Item | Group) {
    this.defaultValue = item[this.args.column.field] || ''
    this.$input.val(this.defaultValue);
    (this.$input[0] as HTMLInputElement).defaultValue = this.defaultValue
    this.$input.select()
  }

  serializeValue() {
    return this.$input.val()
  }

  applyValue(item: Item | Group, state: any) {
    item[this.args.column.field] = state
  }

  isValueChanged() {
    return (!(this.$input.val() === '' && this.defaultValue == null)) && (this.$input.val() !== this.defaultValue)
  }

  validate() {
    if (this.args.column.validator) {
      var validationResults = this.args.column.validator(this.$input.val())
      if (!validationResults.valid) {
        return validationResults
      }
    }

    return {
      valid: true,
      msg: null
    }
  }
}
