/**
 * @license
 * (c) 2016-2017 Coatue Management LLC
 * (c) 2009-2013 Michael Leibman
 * http://github.com/coatue/slickgrid
 *
 * Distributed under MIT license.
 * All rights reserved.
 *
 * NOTES:
 *     Cell/row DOM manipulations are done directly bypassing jQuery's DOM manipulation methods.
 *     This increases the speed dramatically, but can only be done safely because there are no event handlers
 *     or data associated with any cell/row DOM nodes. Cell editors must make sure they implement .destroy()
 *     and do proper cleanup.
 *
 * type Range {
 *   top: Number,
 *   bottom: Number,
 *   leftPx: Number,
 *   rightPx: Number
 * }
 *
 */

export { EditController, EditorLock, Event, EventData, EventHandler, GlobalEditorLock, Group, GroupTotals, NonDataItem, Range, Stat } from './core'
export { DataView, GroupingInfo, GroupRowMetadata, Item, Options as DataViewOptions } from './dataview'
export { Editor } from './editors'
export { Formatter } from './formatters'
export { AsyncPostRenderer, Column, COLUMNS_TO_LEFT, COLUMNS_TO_RIGHT, EditCommand, EventArgs, Options, SelectionModel, SlickGrid, SortColumn, SubHeaderRenderer, Validator } from './grid'
export { GroupItemMetadataProvider } from './groupitemmetadataprovider'

// make sure required JavaScript modules are loaded
if (typeof jQuery === 'undefined') {
  throw 'SlickGrid requires jquery module to be loaded'
}
if (!jQuery.fn.drag) {
  throw 'SlickGrid requires jquery.event.drag module to be loaded'
}
