class Workout {
  final int id;
  final String title;
  final int durationMinutes;
  final String difficulty;

  Workout({
    required this.id,
    required this.title,
    required this.durationMinutes,
    required this.difficulty,
  });

  factory Workout.fromJson(Map<String, dynamic> json) {
    return Workout(
      id: json['id'],
      title: json['title'],
      durationMinutes: json['durationMinutes'],
      difficulty: json['difficulty'],
    );
  }
}