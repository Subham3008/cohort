const reelsData = [
  {
    isMuted: true,
    username: "traveler_raj",
    likeCount: 1203,
    isLiked: false,
    commentCount: 312,
    caption: "Lost in the mountains ⛰️ | Nature therapy 💚",
    video: "./videos/video1.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/32.jpg",
    shareCount: 98,
    isFollowed: true
  },
  {
    isMuted: true,
    username: "foodieworld",
    likeCount: 8503,
    isLiked: true,
    commentCount: 214,
    caption: "Cheese pull challenge 🤤🧀 #FoodLover",
    video: "./videos/video2.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/44.jpg",
    shareCount: 56,
    isFollowed: false
  },
  {
    isMuted: true,
    username: "code_with_sub",
    likeCount: 1566,
    isLiked: true,
    commentCount: 528,
    caption: "Late night coding + coffee ☕💻 #WebDev",
    video: "./videos/video3.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/85.jpg",
    shareCount: 140,
    isFollowed: true
  },
  {
    isMuted: true,
    username: "fit_life_hero",
    likeCount: 6023,
    isLiked: false,
    commentCount: 181,
    caption: "Push harder than yesterday 🏋️‍♂️🔥",
    video: "./videos/video4.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/19.jpg",
    shareCount: 34,
    isFollowed: false
  },
  {
    isMuted: true,
    username: "artistic_mind",
    likeCount: 1123,
    isLiked: true,
    commentCount: 402,
    caption: "Turning imagination into art 🎨✨",
    video: "./videos/video5.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/65.jpg",
    shareCount: 87,
    isFollowed: true
  }
];

let allReel = document.querySelector(".all-reel")

function renderReels() {

  let clutter = ''
  reelsData.forEach(function (elem, idx) {
    clutter += `<div class="reel">
          <video autoplay loop ${elem.isMuted ? 'muted' : ''} src="${elem.video}"></video>
          <div class="mic" id="${idx}">${elem.isMuted ? '<i class="ri-volume-mute-line"></i>' : ' <i class="ri-volume-up-line"></i>'}
     
    </div>
          <div class="bottom">
            <div class="user">
              <img
                src="https://images.unsplash.com/photo-1562572159-4efc207f5aff?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="">
              <h4>${elem.username}</h4>
              <button id="${idx}" class="follow">${elem.isFollowed ? 'Unfollow' : 'follow'}</button>
            </div>
            <h3>${elem.caption}</h3>
          </div>
          <div class="right">
            <div id="${idx}"  class="like">
              <h4 class="like-icon icon">${elem.isLiked ? '<i class="love ri-heart-3-fill"></i>' : '<i class="ri-heart-3-line"></i>'}</h4>
              <h6>${elem.likeCount}</h6>
            </div>
            <div class="comment">
              <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
              <h6>${elem.commentCount}</h6>
            </div>
            <div class="share">
              <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
              <h6>${elem.shareCount}</h6>
            </div>
            <div class="menu">
              <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
            </div>

          </div>
        </div>`
  })

  allReel.innerHTML = clutter
}

renderReels()

allReel.addEventListener('click', function (dets) {

  // console.log(dets.target.className);

  if (dets.target.className == "like") {
    if (!reelsData[dets.target.id].isLiked) {
      reelsData[dets.target.id].likeCount++
      reelsData[dets.target.id].isLiked = true
    } else {
      reelsData[dets.target.id].likeCount--
      reelsData[dets.target.id].isLiked = false
    }
    renderReels()
  }

  if (dets.target.className == "follow") {
    if (!reelsData[dets.target.id].isFollowed) {
      reelsData[dets.target.id].isFollowed = true
    } else {
      reelsData[dets.target.id].isFollowed = false
    }
    renderReels()
  }

  if (dets.target.className == "mic") {
    if (!reelsData[dets.target.id].isMuted) {
      reelsData[dets.target.id].isMuted = true
    } else {
      reelsData[dets.target.id].isMuted = false
    }
    renderReels()
  }




})