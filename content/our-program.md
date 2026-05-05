---
# =========================
# PAGE SETTINGS
# =========================

title: Our Program
layout: our-program.njk


# =========================
# HERO
# =========================

hero_title: Our Program
hero_image: /assets/images/program-hero.jpg


# =========================
# IMPORTANT UPDATE
# =========================
# Set update_enabled to true to show a blue announcement box at the top of the page.
# Set it to false to hide it when there is no active announcement.

update_enabled: true

update_title: Important Update
update_text: |
  The 2025–2026 season begins Monday, September 22. Volunteers should arrive 15 minutes early for orientation on opening night.


# =========================
# SCHEDULE
# =========================
# season: The label shown as the schedule heading (e.g. "2025–2026").
# monday_label: The label for the recurring session day.
# default_time: The time shown next to the monday_label.
#
# schedule: A list of months with their session dates.
#   Format: MonthName: [day, day, day]
#
# extra_sessions: Additional sessions listed below the main schedule grid.
#   Each entry has a date and a time.

season: 2025–2026

monday_label: Monday Sessions
default_time: 6:00 PM – 7:30 PM

schedule:
  September: [22, 29]
  October: [6, 13, 20, 27]
  November: [3, 10, 17, 24]
  December: [1, 8, 15]
  January: [5, 12, 19, 26]
  February: [2, 9, 16, 23]
  March: [2, 9, 16, 23]

extra_sessions:
  - date: March 16
    time: 5:30 PM – 8:30 PM
  - date: March 18
    time: 5:30 PM – 9:00 PM
  - date: March 20
    time: 5:30 PM – 9:00 PM
  - date: March 21 (SHOW DAY)
    time: 5:30 PM (Stars call time)


# =========================
# SKATING EVENTS
# =========================
# Each event has a title, date, time, and a location with a link.
# Set highlight: true to display the card in the inverted (blue) style —
# typically used for the Ice Show.

skating_events:
  - title: Skate with the Otters
    date: November 29
    time: TBD
    location_name: Erie Insurance Arena
    location_url: https://erieinsurancearena.com

  - title: Annual Ice Show
    date: March 21
    time: 7:00 PM
    location_name: Mercyhurst Ice Center
    location_url: https://www.mercyhurst.edu
    highlight: true

  - title: Banquet
    date: March 26
    time: 5:30 PM
    location_name: Ambassador Conference Center
    location_url: https://ambassadorerie.com


# =========================
# FUNDRAISERS
# =========================
# A simple list of fundraiser descriptions shown below the event cards.

fundraisers:
  - Bingo Fundraiser — October 5, Brookside Fire Hall
  - Stanganelli's Fundraiser begins October 13 (delivery November 24)
  - Daffins candy bar sale — TBD

schedule_download: /assets/files/schedule-2025-2026.pdf


# =========================
# PHOTO GALLERY
# =========================
# Each gallery item has an image path, a caption, and a photo credit.
# Images appear in a scrollable carousel. Clicking one opens it full-screen.

gallery:
  - image: /assets/images/gallery1.jpg
    caption: Ice Show rehearsal
    credit: Photo by John Smith

  - image: /assets/images/gallery2.jpg
    caption: Opening night
    credit: Photo by Jane Doe

  - image: /assets/images/gallery3.jpg
    caption: Skate with the Otters
    credit: Photo by Mike Lee
---
