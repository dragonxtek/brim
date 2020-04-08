## v0.6.0

* Add auto-update for MacOS (#515)
* Fix error message presentation via content-type inspection (#519)
* Add menu options for **Help > About** and **File > Settings** in Windows (#521)
* Add menu options for **File > Close Tab**, **File > Close Window**, and **File > Exit** (Windows only) (#522)
* Remove dependency on unzip executable (#525)
* Fix an issue where slices from pcap filenames containing space chars would not open (#526)
* Store pcap slices in OS temp dir rather than `Downloads` dir (#528)
* Fix an issue when clicking between multiple tabs during pcap ingest (#527)
* Maintain separate Log Details panel for each Space (#541)
* Show a warning in History panel for items from deleted Spaces (#547)
* Sign the Windows installer (#549)
* Change logging config to use the new waterfall logger in zqd (#540)
* Use a new Zeek launcher on Windows to improve error handling (#548)

## v0.5.4

* Ensure bundled zeek can run on MacOS version 10.10 and beyond. (#513)
* Update zq to v0.8.0. (#516)
* Fix an issue where a pcap slice error was not being caught. (#514)

## v0.5.3

* Update the windows zeek artifact to support pcapng. (#530)

## v0.5.2

This is the same as v0.5.1, but addresses a CI issue that stopped the creation of the Windows installer executable. 

## v0.5.1

* Initial (beta) Windows release creation and support. Windows releases are currently unsigned (unlike our Mac releases). See [README-Windows](README-Windows.md) for details.
* Warn on close if there are still active pcap ingests.
* Fix some issues saving search history.