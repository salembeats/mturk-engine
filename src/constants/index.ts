import { configureApiRoot } from '../utils/config';

export const CONNECT_ACCOUNT_REQUEST = 'CONNECT_ACCOUNT_REQUEST';
export type CONNECT_ACCOUNT_REQUEST = typeof CONNECT_ACCOUNT_REQUEST;

export const CONNECT_ACCOUNT_SUCCESS = 'CONNECT_ACCOUNT_SUCCESS';
export type CONNECT_ACCOUNT_SUCCESS = typeof CONNECT_ACCOUNT_SUCCESS;

export const CONNECT_ACCOUNT_FAILURE = 'CONNECT_ACCOUNT_FAILURE';
export type CONNECT_ACCOUNT_FAILURE = typeof CONNECT_ACCOUNT_FAILURE;

export const DISCONNECT_ACCOUNT = 'DISCONNECT_ACCOUNT';
export type DISCONNECT_ACCOUNT = typeof DISCONNECT_ACCOUNT;

export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export type SEARCH_REQUEST = typeof SEARCH_REQUEST;

export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export type SEARCH_SUCCESS = typeof SEARCH_SUCCESS;

export const SEARCH_FAILURE = 'SEARCH_FAILURE';
export type SEARCH_FAILURE = typeof SEARCH_FAILURE;

export const TOGGLE_SEARCH_ACTIVITY = 'TOGGLE_SEARCH_ACTIVITY';
export type TOGGLE_SEARCH_ACTIVITY = typeof TOGGLE_SEARCH_ACTIVITY;

export const TOGGLE_SEARCH_AUDIO = 'TOGGLE_SEARCH_AUDIO';
export type TOGGLE_SEARCH_AUDIO = typeof TOGGLE_SEARCH_AUDIO;

export const SCHEDULE_NEXT_SEARCH = 'SCHEDULE_NEXT_SEARCH';
export type SCHEDULE_NEXT_SEARCH = typeof SCHEDULE_NEXT_SEARCH;

export const CANCEL_NEXT_SEARCH = 'CANCEL_NEXT_SEARCH';
export type CANCEL_NEXT_SEARCH = typeof CANCEL_NEXT_SEARCH;

export const FETCH_TURKOPTICON_SUCCESS = 'FETCH_TURKOPTICON_SUCCESS';
export type FETCH_TURKOPTICON_SUCCESS = typeof FETCH_TURKOPTICON_SUCCESS;

export const FETCH_TURKOPTICON_REQUEST = 'FETCH_TURKOPTICON_REQUEST';
export type FETCH_TURKOPTICON_REQUEST = typeof FETCH_TURKOPTICON_REQUEST;

export const FETCH_TURKOPTICON_FAILURE = 'FETCH_TURKOPTICON_FAILURE';
export type FETCH_TURKOPTICON_FAILURE = typeof FETCH_TURKOPTICON_FAILURE;

export const TOGGLE_SEARCH_RESULT_EXPAND = 'TOGGLE_SEARCH_RESULT_EXPAND';
export type TOGGLE_SEARCH_RESULT_EXPAND = typeof TOGGLE_SEARCH_RESULT_EXPAND;

export const TOGGLE_QUEUE_ITEM_EXPAND = 'TOGGLE_QUEUE_ITEM_EXPAND';
export type TOGGLE_QUEUE_ITEM_EXPAND = typeof TOGGLE_QUEUE_ITEM_EXPAND;

export const COLLAPSE_ALL_SEARCH_RESULTS = 'COLLAPSE_ALL_SEARCH_RESULTS';
export type COLLAPSE_ALL_SEARCH_RESULTS = typeof COLLAPSE_ALL_SEARCH_RESULTS;

export const COLLAPSE_ALL_QUEUE_ITEMS = 'COLLAPSE_ALL_QUEUE_ITEMS';
export type COLLAPSE_ALL_QUEUE_ITEMS = typeof COLLAPSE_ALL_QUEUE_ITEMS;

export const MARK_HIT_AS_READ = 'MARK_HIT_AS_READ';
export type MARK_HIT_AS_READ = typeof MARK_HIT_AS_READ;

export const MARK_ALL_HITS_AS_READ = 'MARK_ALL_HITS_AS_READ';
export type MARK_ALL_HITS_AS_READ = typeof MARK_ALL_HITS_AS_READ;

export const FETCH_QUEUE_SUCCESS = 'FETCH_QUEUE_SUCCESS';
export type FETCH_QUEUE_SUCCESS = typeof FETCH_QUEUE_SUCCESS;

export const FETCH_QUEUE_REQUEST = 'FETCH_QUEUE_REQUEST';
export type FETCH_QUEUE_REQUEST = typeof FETCH_QUEUE_REQUEST;

export const FETCH_QUEUE_FAILURE = 'FETCH_QUEUE_FAILURE';
export type FETCH_QUEUE_FAILURE = typeof FETCH_QUEUE_FAILURE;

export const ACCEPT_HIT_REQUEST = 'ACCEPT_HIT_REQUEST';
export type ACCEPT_HIT_REQUEST = typeof ACCEPT_HIT_REQUEST;

export const ACCEPT_HIT_FROM_WATCHER = 'ACCEPT_HIT_FROM_WATCHER';
export type ACCEPT_HIT_FROM_WATCHER = typeof ACCEPT_HIT_FROM_WATCHER;

export const ACCEPT_HIT_SUCCESS = 'ACCEPT_HIT_SUCCESS';
export type ACCEPT_HIT_SUCCESS = typeof ACCEPT_HIT_SUCCESS;

export const ACCEPT_HIT_FAILURE = 'ACCEPT_HIT_FAILURE';
export type ACCEPT_HIT_FAILURE = typeof ACCEPT_HIT_FAILURE;

export const RETURN_HIT_REQUEST = 'RETURN_HIT_REQUEST';
export type RETURN_HIT_REQUEST = typeof RETURN_HIT_REQUEST;

export const RETURN_HIT_FAILURE = 'RETURN_HIT_FAILURE';
export type RETURN_HIT_FAILURE = typeof RETURN_HIT_FAILURE;

export const RETURN_HIT_SUCCESS = 'RETURN_HIT_SUCCESS';
export type RETURN_HIT_SUCCESS = typeof RETURN_HIT_SUCCESS;

export const UPDATE_FIELD = 'UPDATE_FIELD';
export type UPDATE_FIELD = typeof UPDATE_FIELD;

export const TOGGLE_FORM = 'TOGGLE_FORM';
export type TOGGLE_FORM = typeof TOGGLE_FORM;

export const CHANGE_SELECTED_TAB = 'CHANGE_SELECTED_TAB';
export type CHANGE_SELECTED_TAB = typeof CHANGE_SELECTED_TAB;

export const CHANGE_SEARCH_RESULT_SORT = 'CHANGE_SEARCH_RESULT_SORT';
export type CHANGE_SEARCH_RESULT_SORT = typeof CHANGE_SEARCH_RESULT_SORT;

export const HIT_BLOCKLIST_ADD = 'HIT_BLOCKLIST_ADD';
export type HIT_BLOCKLIST_ADD = typeof HIT_BLOCKLIST_ADD;

export const HIT_BLOCKLIST_REMOVE = 'HIT_BLOCKLIST_REMOVE';
export type HIT_BLOCKLIST_REMOVE = typeof HIT_BLOCKLIST_REMOVE;

export const REQUESTER_BLOCKLIST_ADD = 'REQUESTER_BLOCKLIST_ADD';
export type REQUESTER_BLOCKLIST_ADD = typeof REQUESTER_BLOCKLIST_ADD;

export const REQUESTER_BLOCKLIST_REMOVE = 'REQUESTER_BLOCKLIST_REMOVE';
export type REQUESTER_BLOCKLIST_REMOVE = typeof REQUESTER_BLOCKLIST_REMOVE;

export const ADD_WATCHER = 'ADD_WATCHER';
export type ADD_WATCHER = typeof ADD_WATCHER;

export const DELETE_WATCHER = 'DELETE_WATCHER';
export type DELETE_WATCHER = typeof DELETE_WATCHER;

export const CANCEL_NEXT_WATCHER_TICK = 'CANCEL_NEXT_WATCHER_TICK';
export type CANCEL_NEXT_WATCHER_TICK = typeof CANCEL_NEXT_WATCHER_TICK;

export const SCHEDULE_NEXT_WATCHER_TICK = 'SCHEDULE_NEXT_WATCHER_TICK';
export type SCHEDULE_NEXT_WATCHER_TICK = typeof SCHEDULE_NEXT_WATCHER_TICK;

export const SET_WATCHER_TIMER = 'SET_WATCHER_TIMER';
export type SET_WATCHER_TIMER = typeof SET_WATCHER_TIMER;

export const EDIT_WATCHER_FIELD = 'EDIT_WATCHER_FIELD';
export type EDIT_WATCHER_FIELD = typeof EDIT_WATCHER_FIELD;

export const PLAY_AUDIO = 'PLAY_AUDIO';
export type PLAY_AUDIO = typeof PLAY_AUDIO;

export const CHANGE_VOLUME = 'CHANGE_VOLUME';
export type CHANGE_VOLUME = typeof CHANGE_VOLUME;

export const TOGGLE_AUDIO_ENABLED = 'TOGGLE_AUDIO_ENABLED';
export type TOGGLE_AUDIO_ENABLED = typeof TOGGLE_AUDIO_ENABLED;

export const EDIT_AUDIO_SOURCE = 'EDIT_AUDIO_SOURCE';
export type EDIT_AUDIO_SOURCE = typeof EDIT_AUDIO_SOURCE;

export const STATUS_SUMMARY_REQUEST = 'STATUS_SUMMARY_REQUEST';
export type STATUS_SUMMARY_REQUEST = typeof STATUS_SUMMARY_REQUEST;

export const STATUS_SUMMARY_SUCCESS = 'STATUS_SUMMARY_SUCCESS';
export type STATUS_SUMMARY_SUCCESS = typeof STATUS_SUMMARY_SUCCESS;

export const STATUS_SUMMARY_FAILURE = 'STATUS_SUMMARY_FAILURE';
export type STATUS_SUMMARY_FAILURE = typeof STATUS_SUMMARY_FAILURE;

export const STATUS_DETAIL_REQUEST = 'STATUS_DETAIL_REQUEST';
export type STATUS_DETAIL_REQUEST = typeof STATUS_DETAIL_REQUEST;

export const STATUS_DETAIL_SUCCESS = 'STATUS_DETAIL_SUCCESS';
export type STATUS_DETAIL_SUCCESS = typeof STATUS_DETAIL_SUCCESS;

export const STATUS_DETAIL_FAILURE = 'STATUS_DETAIL_FAILURE';
export type STATUS_DETAIL_FAILURE = typeof STATUS_DETAIL_FAILURE;

export const REFRESH_DATABASE_REQUEST = 'REFRESH_DATABASE_REQUEST';
export type REFRESH_DATABASE_REQUEST = typeof REFRESH_DATABASE_REQUEST;

export const REFRESH_DATABASE_SUCCESS = 'REFRESH_DATABASE_SUCCESS';
export type REFRESH_DATABASE_SUCCESS = typeof REFRESH_DATABASE_SUCCESS;

export const REFRESH_DATABASE_FAILURE = 'REFRESH_DATABASE_FAILURE';
export type REFRESH_DATABASE_FAILURE = typeof REFRESH_DATABASE_FAILURE;

export const SELECT_DATABASE_DATE = 'SELECT_DATABASE_DATE';
export type SELECT_DATABASE_DATE = typeof SELECT_DATABASE_DATE;

export const CLEAR_DATABASE_DATE_SELECT = 'CLEAR_DATABASE_DATE_SELECT';
export type CLEAR_DATABASE_DATE_SELECT = typeof CLEAR_DATABASE_DATE_SELECT;

export const EDIT_BONUS = 'EDIT_BONUS';
export type EDIT_BONUS = typeof EDIT_BONUS;

export const CHANGE_DAILY_GOAL = 'CHANGE_DAILY_GOAL';
export type CHANGE_DAILY_GOAL = typeof CHANGE_DAILY_GOAL;

export const READ_PERSISTED_STATE = 'READ_PERSISTED_STATE';
export type READ_PERSISTED_STATE = typeof READ_PERSISTED_STATE;

export const WRITE_PERSISTED_STATE = 'WRITE_PERSISTED_STATE';
export type WRITE_PERSISTED_STATE = typeof WRITE_PERSISTED_STATE;

export const UPLOAD_REQUEST = 'UPLOAD_REQUEST';
export type UPLOAD_REQUEST = typeof UPLOAD_REQUEST;

export const UPLOAD_PROGRESS = 'UPLOAD_PROGRESS';
export type UPLOAD_PROGRESS = typeof UPLOAD_PROGRESS;

export const UPLOAD_SUCCESS = 'UPLOAD_SUCCESS';
export type UPLOAD_SUCCESS = typeof UPLOAD_SUCCESS;

export const UPLOAD_FAILURE = 'UPLOAD_FAILURE';
export type UPLOAD_FAILURE = typeof UPLOAD_FAILURE;

export const REMOVE_UPLOADED_FILE = 'REMOVE_UPLOADED_FILE';
export type REMOVE_UPLOADED_FILE = typeof REMOVE_UPLOADED_FILE;

export const TOGGLE_LEGACY_LINKS = 'TOGGLE_LEGACY_LINKS';
export type TOGGLE_LEGACY_LINKS = typeof TOGGLE_LEGACY_LINKS;

export const TOGGLE_NOTIFICATIONS = 'TOGGLE_NOTIFICATIONS';
export type TOGGLE_NOTIFICATIONS = typeof TOGGLE_NOTIFICATIONS;

export const NOTIFICATION_PERM_REQUEST = 'NOTIFICATION_PERM_REQUEST';
export type NOTIFICATION_PERM_REQUEST = typeof NOTIFICATION_PERM_REQUEST;

export const NOTIFICATION_PERM_UPDATE = 'NOTIFICATION_PERM_UPDATE';
export type NOTIFICATION_PERM_UPDATE = typeof NOTIFICATION_PERM_UPDATE;

export const SEND_NOTIFICATION = 'SEND_NOTIFICATION';
export type SEND_NOTIFICATION = typeof SEND_NOTIFICATION;

export const SELECT_WATCHER_TREE_NODE = 'SELECT_WATCHER_TREE_NODE';
export type SELECT_WATCHER_TREE_NODE = typeof SELECT_WATCHER_TREE_NODE;

export const WATCHER_FOLDER_TOGGLE_EXPAND = 'WATCHER_FOLDER_TOGGLE_EXPAND';
export type WATCHER_FOLDER_TOGGLE_EXPAND = typeof WATCHER_FOLDER_TOGGLE_EXPAND;

export const WATCHER_FOLDER_EDIT = 'WATCHER_FOLDER_EDIT';
export type WATCHER_FOLDER_EDIT = typeof WATCHER_FOLDER_EDIT;

export const CREATE_WATCHER_FOLDER = 'CREATE_WATCHER_FOLDER';
export type CREATE_WATCHER_FOLDER = typeof CREATE_WATCHER_FOLDER;

export const ADD_WATCHER_FOLDER = 'ADD_WATCHER_FOLDER';
export type ADD_WATCHER_FOLDER = typeof ADD_WATCHER_FOLDER;

export const DELETE_WATCHER_FOLDER = 'DELETE_WATCHER_FOLDER';
export type DELETE_WATCHER_FOLDER = typeof DELETE_WATCHER_FOLDER;

export const UPDATE_QUEUE_SORT = 'UPDATE_QUEUE_SORT';
export type UPDATE_QUEUE_SORT = typeof UPDATE_QUEUE_SORT;

export const API_LIMIT_EXCEEDED = 'API_LIMIT_EXCEEDED';
export type API_LIMIT_EXCEEDED = typeof API_LIMIT_EXCEEDED;

export const UPDATE_DB_SEARCH_TERM = 'UPDATE_DB_SEARCH_TERM';
export type UPDATE_DB_SEARCH_TERM = typeof UPDATE_DB_SEARCH_TERM;

export const UPDATE_DB_STATUS_FILTERS = 'UPDATE_DB_STATUS_FILTERS';
export type UPDATE_DB_STATUS_FILTERS = typeof UPDATE_DB_STATUS_FILTERS;

export const API_URL = configureApiRoot();
