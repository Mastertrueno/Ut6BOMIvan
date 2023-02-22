import VideoSystem from './VideoSystemModel.js';
import VideoSystemController from './VideoSystemController.js';
import VideoSystemView from './VideoSystemView.js';

const VideoSystemApp = new VideoSystemController(
    VideoSystem.getInstance(), new VideoSystemView()
  );
export default VideoSystemApp;
