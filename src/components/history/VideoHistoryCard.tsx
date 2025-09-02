import React from 'react';
import { Clock, MoreVertical, Play } from 'lucide-react';

interface VideoHistoryCardProps {
  video: {
    id: string;
    title: string;
    channel: string;
    thumbnail: string;
    duration: string;
    watchedAt: string;
    category: string;
    progress: number;
  };
}

const VideoHistoryCard: React.FC<VideoHistoryCardProps> = ({ video }) => {
  return (
    <div className="flex space-x-4 p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-all duration-200 group">
      <div className="relative flex-shrink-0">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-40 h-24 object-cover rounded-lg"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 rounded-lg transition-all duration-200 flex items-center justify-center">
          <Play className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </div>
        
        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-300 rounded-b-lg overflow-hidden">
          <div 
            className="h-full bg-red-600 transition-all duration-300"
            style={{ width: `${video.progress}%` }}
          />
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 line-clamp-2 hover:text-red-600 transition-colors duration-200 cursor-pointer">
              {video.title}
            </h3>
            <p className="text-sm text-gray-600 mt-1 hover:text-gray-800 transition-colors duration-200 cursor-pointer">
              {video.channel}
            </p>
            
            <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
              <div className="flex items-center space-x-1">
                <Clock className="w-3 h-3" />
                <span>{video.watchedAt}</span>
              </div>
              <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                {video.category}
              </span>
              {video.progress < 100 && (
                <span className="text-red-600 font-medium">
                  {video.progress}% assistido
                </span>
              )}
            </div>
          </div>

          <button className="p-2 opacity-0 group-hover:opacity-100 rounded-lg hover:bg-gray-100 transition-all duration-200">
            <MoreVertical className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoHistoryCard;