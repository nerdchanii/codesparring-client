const IDE_OPTION = {
  KEYBIND_LIST: ['emacs', 'vim', 'vscode', 'sublime'],
  FONT_SIZE_LIST: [8, 10, 12, 14, 16, 18, 20, 24, 30, 34, 36, 38, 40],
  THEME_LIST: ['monokai', 'github', 'xcode', 'dracula'],
  LANGUAGE_LIST: ['cpp', 'javascript', 'python'],
};

export default IDE_OPTION;


export const defaultIdeOption = {
  keybind: 'vscode',
  fontSize: 14,
  theme: 'monokai',
  language: 'python',
  extension: 'py',
};


export const LANGUAGE_EXTENSION = {
  javascript: 'js',
  cpp: 'cpp',
  python: 'py',
}