# samples

```
norio@nmb lambda % ./lambda-cli 'echo $PATH'
echo $PATH
----------------------------------------------------------------
/var/lang/bin:/usr/local/bin:/usr/bin/:/bin:/opt/bin
```

```
norio@nmb lambda % ./lambda-cli 'ls -l /var/lang/bin'
ls -l /var/lang/bin
----------------------------------------------------------------
total 92928
lrwxrwxrwx 1 root root       45 Oct 31 18:34 corepack -> ../lib/node_modules/corepack/dist/corepack.js
-rwxr-xr-x 1 root root 95155648 Oct 24 16:12 node
lrwxrwxrwx 1 root root       38 Oct 31 18:34 npm -> ../lib/node_modules/npm/bin/npm-cli.js
lrwxrwxrwx 1 root root       38 Oct 31 18:34 npx -> ../lib/node_modules/npm/bin/npx-cli.js
```

```
norio@nmb lambda % ./lambda-cli 'ls -l /usr/local/bin'
ls -l /usr/local/bin
----------------------------------------------------------------
total 5716
-rwxr-xr-x 1 root root 5853184 Jul 11 13:33 aws-lambda-rie
```

```
norio@nmb lambda % ./lambda-cli 'ls -l /usr/bin'
ls -l /usr/bin
----------------------------------------------------------------
total 7060
-r-xr-xr-x 1 root root      48 Feb 17  2023 [
-rwxr-xr-x 1 root root      33 Jan 28  2023 alias
-r-xr-xr-x 1 root root      51 Feb 17  2023 arch
lrwxrwxrwx 1 root root       4 Aug 14 20:55 awk -> gawk
-r-xr-xr-x 1 root root      52 Feb 17  2023 b2sum
-r-xr-xr-x 1 root root      53 Feb 17  2023 base32
-r-xr-xr-x 1 root root      53 Feb 17  2023 base64
-r-xr-xr-x 1 root root      55 Feb 17  2023 basename
-r-xr-xr-x 1 root root      53 Feb 17  2023 basenc
-rwxr-xr-x 1 root root 1440144 Jan 28  2023 bash
lrwxrwxrwx 1 root root      10 Jan 28  2023 bashbug -> bashbug-64
-rwxr-xr-x 1 root root    7202 Jan 28  2023 bashbug-64
-rwxr-xr-x 1 root root      30 Jan 28  2023 bg
-rwxr-xr-x 1 root root    1648 Aug 15 18:20 ca-legacy
-r-xr-xr-x 1 root root      50 Feb 17  2023 cat
-rwxr-xr-x 1 root root    3289 Sep 25 17:03 catchsegv
-rwxr-xr-x 1 root root      30 Jan 28  2023 cd
-r-xr-xr-x 1 root root      52 Feb 17  2023 chcon
-r-xr-xr-x 1 root root      52 Feb 17  2023 chgrp
-r-xr-xr-x 1 root root      52 Feb 17  2023 chmod
-r-xr-xr-x 1 root root      52 Feb 17  2023 chown
-r-xr-xr-x 1 root root      52 Feb 17  2023 cksum
-r-xr-xr-x 1 root root      51 Feb 17  2023 comm
-rwxr-xr-x 1 root root      35 Jan 28  2023 command
-rwxr-xr-x 1 root root 1348248 Feb 17  2023 coreutils
-r-xr-xr-x 1 root root      49 Feb 17  2023 cp
-r-xr-xr-x 1 root root      53 Feb 17  2023 csplit
-rwxr-xr-x 1 root root  223128 Oct  6 21:58 curl
-r-xr-xr-x 1 root root      50 Feb 17  2023 cut
-r-xr-xr-x 1 root root      51 Feb 17  2023 date
-r-xr-xr-x 1 root root      49 Feb 17  2023 dd
-r-xr-xr-x 1 root root      49 Feb 17  2023 df
-r-xr-xr-x 1 root root      50 Feb 17  2023 dir
-r-xr-xr-x 1 root root      56 Feb 17  2023 dircolors
-r-xr-xr-x 1 root root      54 Feb 17  2023 dirname
lrwxrwxrwx 1 root root       8 Feb  1  2023 dnf -> microdnf
-r-xr-xr-x 1 root root      49 Feb 17  2023 du
-r-xr-xr-x 1 root root      51 Feb 17  2023 echo
-rwxr-xr-x 1 root root      45 Jan 30  2023 egrep
-r-xr-xr-x 1 root root      50 Feb 17  2023 env
-r-xr-xr-x 1 root root      53 Feb 17  2023 expand
-r-xr-xr-x 1 root root      51 Feb 17  2023 expr
-r-xr-xr-x 1 root root      53 Feb 17  2023 factor
-r-xr-xr-x 1 root root      52 Feb 17  2023 false
-rwxr-xr-x 1 root root      30 Jan 28  2023 fc
-rwxr-xr-x 1 root root      30 Jan 28  2023 fg
-rwxr-xr-x 1 root root      45 Jan 30  2023 fgrep
-r-xr-xr-x 1 root root      50 Feb 17  2023 fmt
-r-xr-xr-x 1 root root      51 Feb 17  2023 fold
-rwxr-xr-x 1 root root   24552 Sep  8 08:33 gapplication
-rwxr-xr-x 1 root root  719088 Aug 14 20:55 gawk
-rwxr-xr-x 1 root root   53512 Sep  8 08:33 gdbus
-rwxr-xr-x 1 root root   29264 Sep 25 17:05 gencat
-rwxr-xr-x 1 root root   36688 Sep 25 17:05 getconf
-rwxr-xr-x 1 root root   37336 Sep 25 17:05 getent
-rwxr-xr-x 1 root root      35 Jan 28  2023 getopts
-rwxr-xr-x 1 root root   98904 Sep  8 08:33 gio
-rwxr-xr-x 1 root root   20304 Sep  8 08:33 gio-querymodules-64
-rwxr-xr-x 1 root root   53488 Sep  8 08:33 glib-compile-schemas
-rwxr-xr-x 1 root root  938568 Jun  5  2023 gpg
-rwxr-xr-x 1 root root   41176 Jan 29  2023 gpg-error
lrwxrwxrwx 1 root root       3 Jun  5  2023 gpg2 -> gpg
-rwxr-xr-x 1 root root   86744 Jan 31  2023 gpgme-json
lrwxrwxrwx 1 root root       4 Jun  5  2023 gpgv2 -> gpgv
-rwxr-xr-x 1 root root  162576 Jan 30  2023 grep
-r-xr-xr-x 1 root root      53 Feb 17  2023 groups
-rwxr-xr-x 1 root root   32944 Sep  8 08:33 gsettings
-rwxr-xr-x 1 root root      32 Jan 28  2023 hash
-r-xr-xr-x 1 root root      51 Feb 17  2023 head
-r-xr-xr-x 1 root root      53 Feb 17  2023 hostid
-rwxr-xr-x 1 root root   66760 Sep 25 17:05 iconv
-r-xr-xr-x 1 root root      49 Feb 17  2023 id
-r-xr-xr-x 1 root root      55 Feb 17  2023 install
-rwxr-xr-x 1 root root      32 Jan 28  2023 jobs
-r-xr-xr-x 1 root root      51 Feb 17  2023 join
lrwxrwxrwx 1 root root      32 Sep 25 17:03 ld.so -> ../../lib64/ld-linux-x86-64.so.2
-rwxr-xr-x 1 root root    5446 Sep 25 17:03 ldd
-r-xr-xr-x 1 root root      51 Feb 17  2023 link
-r-xr-xr-x 1 root root      49 Feb 17  2023 ln
-rwxr-xr-x 1 root root   61656 Sep 25 17:05 locale
-rwxr-xr-x 1 root root  322728 Sep 25 17:05 localedef
-r-xr-xr-x 1 root root      54 Feb 17  2023 logname
-r-xr-xr-x 1 root root      49 Feb 17  2023 ls
-r-xr-xr-x 1 root root      53 Feb 17  2023 md5sum
-rwxr-xr-x 1 root root  105656 Feb  1  2023 microdnf
-r-xr-xr-x 1 root root      52 Feb 17  2023 mkdir
-r-xr-xr-x 1 root root      53 Feb 17  2023 mkfifo
-r-xr-xr-x 1 root root      52 Feb 17  2023 mknod
-r-xr-xr-x 1 root root      53 Feb 17  2023 mktemp
-rwxr-xr-x 1 root root   29176 Feb  1  2023 modulemd-validator
-r-xr-xr-x 1 root root      49 Feb 17  2023 mv
-r-xr-xr-x 1 root root      51 Feb 17  2023 nice
-r-xr-xr-x 1 root root      49 Feb 17  2023 nl
-r-xr-xr-x 1 root root      52 Feb 17  2023 nohup
-r-xr-xr-x 1 root root      52 Feb 17  2023 nproc
-r-xr-xr-x 1 root root      53 Feb 17  2023 numfmt
-r-xr-xr-x 1 root root      49 Feb 17  2023 od
-rwxr-xr-x 1 root root   32888 Sep 11 08:05 p11-kit
-r-xr-xr-x 1 root root      52 Feb 17  2023 paste
-r-xr-xr-x 1 root root      54 Feb 17  2023 pathchk
-r-xr-xr-x 1 root root      52 Feb 17  2023 pinky
-rwxr-xr-x 1 root root   25096 Sep 25 17:05 pldd
-r-xr-xr-x 1 root root      49 Feb 17  2023 pr
-r-xr-xr-x 1 root root      55 Feb 17  2023 printenv
-r-xr-xr-x 1 root root      53 Feb 17  2023 printf
-r-xr-xr-x 1 root root      50 Feb 17  2023 ptx
-r-xr-xr-x 1 root root      50 Feb 17  2023 pwd
-rwxr-xr-x 1 root root      32 Jan 28  2023 read
-r-xr-xr-x 1 root root      55 Feb 17  2023 readlink
-r-xr-xr-x 1 root root      55 Feb 17  2023 realpath
-r-xr-xr-x 1 root root      49 Feb 17  2023 rm
-r-xr-xr-x 1 root root      52 Feb 17  2023 rmdir
-rwxr-xr-x 1 root root   24904 Apr 17  2023 rpm
-rwxr-xr-x 1 root root   24384 Apr 17  2023 rpm2archive
-rwxr-xr-x 1 root root   16184 Apr 17  2023 rpm2cpio
-rwxr-xr-x 1 root root   20912 Apr 17  2023 rpmdb
-rwxr-xr-x 1 root root   16664 Apr 17  2023 rpmkeys
lrwxrwxrwx 1 root root       3 Apr 17  2023 rpmquery -> rpm
lrwxrwxrwx 1 root root       3 Apr 17  2023 rpmverify -> rpm
-r-xr-xr-x 1 root root      53 Feb 17  2023 runcon
-rwxr-xr-x 1 root root  116840 Jan 30  2023 sed
-r-xr-xr-x 1 root root      50 Feb 17  2023 seq
lrwxrwxrwx 1 root root       4 Jan 28  2023 sh -> bash
-r-xr-xr-x 1 root root      54 Feb 17  2023 sha1sum
-r-xr-xr-x 1 root root      56 Feb 17  2023 sha224sum
-r-xr-xr-x 1 root root      56 Feb 17  2023 sha256sum
-r-xr-xr-x 1 root root      56 Feb 17  2023 sha384sum
-r-xr-xr-x 1 root root      56 Feb 17  2023 sha512sum
-r-xr-xr-x 1 root root      52 Feb 17  2023 shred
-r-xr-xr-x 1 root root      51 Feb 17  2023 shuf
-r-xr-xr-x 1 root root      52 Feb 17  2023 sleep
-r-xr-xr-x 1 root root      51 Feb 17  2023 sort
-rwxr-xr-x 1 root root    4282 Sep 25 17:03 sotruss
-r-xr-xr-x 1 root root      52 Feb 17  2023 split
-rwxr-xr-x 1 root root   36912 Sep 25 17:05 sprof
-r-xr-xr-x 1 root root      51 Feb 17  2023 stat
-r-xr-xr-x 1 root root      53 Feb 17  2023 stdbuf
-r-xr-xr-x 1 root root      51 Feb 17  2023 stty
-r-xr-xr-x 1 root root      50 Feb 17  2023 sum
-r-xr-xr-x 1 root root      51 Feb 17  2023 sync
-r-xr-xr-x 1 root root      50 Feb 17  2023 tac
-r-xr-xr-x 1 root root      51 Feb 17  2023 tail
-r-xr-xr-x 1 root root      50 Feb 17  2023 tee
-r-xr-xr-x 1 root root      51 Feb 17  2023 test
-r-xr-xr-x 1 root root      54 Feb 17  2023 timeout
-r-xr-xr-x 1 root root      52 Feb 17  2023 touch
-r-xr-xr-x 1 root root      49 Feb 17  2023 tr
-r-xr-xr-x 1 root root      51 Feb 17  2023 true
-r-xr-xr-x 1 root root      55 Feb 17  2023 truncate
-rwxr-xr-x 1 root root  211008 Sep 11 08:05 trust
-r-xr-xr-x 1 root root      52 Feb 17  2023 tsort
-r-xr-xr-x 1 root root      50 Feb 17  2023 tty
-rwxr-xr-x 1 root root      32 Jan 28  2023 type
-rwxr-xr-x 1 root root   15352 Sep 25 17:03 tzselect
-rwxr-xr-x 1 root root      34 Jan 28  2023 ulimit
-rwxr-xr-x 1 root root      33 Jan 28  2023 umask
-rwxr-xr-x 1 root root      35 Jan 28  2023 unalias
-r-xr-xr-x 1 root root      52 Feb 17  2023 uname
-r-xr-xr-x 1 root root      55 Feb 17  2023 unexpand
-r-xr-xr-x 1 root root      51 Feb 17  2023 uniq
-r-xr-xr-x 1 root root      53 Feb 17  2023 unlink
-rwxr-xr-x 1 root root    1851 Aug 15 18:20 update-ca-trust
-r-xr-xr-x 1 root root      52 Feb 17  2023 users
-r-xr-xr-x 1 root root      51 Feb 17  2023 vdir
-rwxr-xr-x 1 root root      32 Jan 28  2023 wait
-r-xr-xr-x 1 root root      49 Feb 17  2023 wc
-r-xr-xr-x 1 root root      50 Feb 17  2023 who
-r-xr-xr-x 1 root root      53 Feb 17  2023 whoami
-rwxr-xr-x 1 root root   24496 Sep  6 21:18 xmlcatalog
-rwxr-xr-x 1 root root   83264 Sep  6 21:18 xmllint
-r-xr-xr-x 1 root root      50 Feb 17  2023 yes
-rwxr-xr-x 1 root root   28616 Sep 25 17:05 zdump
```

```
norio@nmb lambda % ./lambda-cli 'ls -l /bin'
ls -l /bin
----------------------------------------------------------------
lrwxrwxrwx 1 root root 7 Jan 30  2023 /bin -> usr/bin
```

```
norio@nmb lambda % ./lambda-cli 'ls -l /opt/bin'
ls -l /opt/bin
----------------------------------------------------------------
ls: cannot access '/opt/bin': No such file or directory
```

```
norio@nmb lambda % ./lambda-cli 'ls -l /'
ls -l /
----------------------------------------------------------------
total 168
-rw-r--r--   1 root         root 105780 Oct 24 17:12 THIRD-PARTY-LICENSES.txt
lrwxrwxrwx   1 root         root      7 Jan 30  2023 bin -> usr/bin
dr-xr-xr-x   2 root         root   4096 Jan 30  2023 boot
drwxr-xr-x   2 root         root   4096 Dec 31 18:27 dev
drwxr-xr-x  34 root         root   4096 Oct 20 16:43 etc
drwxr-xr-x   2 root         root   4096 Jan 30  2023 home
-rwxr-xr-x   1 root         root    397 Oct 21 12:48 lambda-entrypoint.sh
lrwxrwxrwx   1 root         root      7 Jan 30  2023 lib -> usr/lib
lrwxrwxrwx   1 root         root      9 Jan 30  2023 lib64 -> usr/lib64
drwxr-xr-x   2 root         root   4096 Oct 16 22:02 local
drwxr-xr-x   2 root         root   4096 Jan 30  2023 media
drwxr-xr-x   2 root         root   4096 Jan 30  2023 mnt
drwxr-xr-x   2 root         root   4096 Jan 30  2023 opt
dr-xr-xr-x 122 root         root      0 Dec 31 18:29 proc
dr-xr-x---   2 root         root   4096 Jan 30  2023 root
drwxr-xr-x   5 root         root   4096 Oct 16 22:02 run
lrwxrwxrwx   1 root         root      8 Jan 30  2023 sbin -> usr/sbin
drwxr-xr-x   2 root         root   4096 Jan 30  2023 srv
drwxr-xr-x   2 root         root   4096 Oct 16 22:02 sys
drwx------   2 sbx_user1051  990   4096 Dec  6 19:25 tmp
drwxr-xr-x  12 root         root   4096 Jul 11 13:33 usr
drwxr-xr-x  24 root         root   4096 Oct 20 15:46 var
```

```
norio@nmb lambda % ./lambda-cli 'whoami'
whoami
----------------------------------------------------------------
sbx_user1051
```

```
norio@nmb lambda % ./lambda-cli 'ls -l /tmp'
ls -l /tmp
----------------------------------------------------------------
total 0
```

```
norio@nmb lambda % ./lambda-cli 'echo "hello world" > /tmp/hello.txt'
echo "hello world" > /tmp/hello.txt
----------------------------------------------------------------
"
```

```
norio@nmb lambda % ./lambda-cli 'ls -l /tmp'
ls -l /tmp
----------------------------------------------------------------
total 4
-rw-rw-r-- 1 sbx_user1051 990 12 Dec 31 18:38 hello.txt
```

```
norio@nmb lambda % ./lambda-cli 'cat /tmp/hello.txt'
cat /tmp/hello.txt
----------------------------------------------------------------
hello world
```

- Note: 
  - The Lambda instance may keep alive for next several minutes.
  - But if you try to access /tmp/hello.txt after 10 min.
  - The file is gone... since the previous Lambda instance is gone.

```
norio@nmb lambda % ./lambda-cli 'ls -l /tmp'
ls -l /tmp
----------------------------------------------------------------
total 0
```
