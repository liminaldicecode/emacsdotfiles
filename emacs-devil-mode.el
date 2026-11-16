;; Devil Mode
(setq devil-lighter " \U0001F608")
(setq devil-prompt "\U0001F608 %t")
(global-devil-mode)
(global-set-key (kbd "C-,") 'global-devil-mode)
(assoc-delete-all "%k SPC" devil-special-keys)

;; Backups
(setq backup-directory-alist '(("." . "~/.emacs.d/backups")))

;; Custom
(setq custom-file (concat user-emacs-directory "custom.el"))
(when (file-exists-p custom-file)
  (load custom-file))

;; Main
(add-hook 'after-init-hook 'global-company-mode)

;; Theme
(load-theme 'adwaita-dark t)
(doom-modeline-mode 1)
(menu-bar-mode 0) 
(tool-bar-mode 0)
(scroll-bar-mode 0)
(global-display-line-numbers-mode t)
(setq display-line-numbers-type 'relative)
(setq inhibit-startup-screen t)
(setq scroll-step 3)
(electric-pair-mode 1)
(ido-mode 1)
(add-to-list 'default-frame-alist
             '(font . "CaskaydiaCove Nerd Font-16"))

;; Keybindings
(keymap-global-set "C-c d" 'duplicate-line)
;; Multiple cursors
(keymap-global-set "C->" 'mc/mark-next-like-this)
(keymap-global-set "C-<" 'mc/mark-previous-like-this)
(keymap-global-set "C-c C-<" 'mc/mark-all-like-this)
(keymap-global-set "C-c m" 'mc/edit-lines)

;; GDScript Mode
(add-hook 'gdscript-mode-hook 'eglot-ensure)
(setq gdscript-use-tab-indents t) 
(setq gdscript-indent-offset 4) 
(setq gdscript-godot-executable "/etc/profiles/per-user/nix/bin/godot") 
(setq gdscript-gdformat-save-and-format t) 
